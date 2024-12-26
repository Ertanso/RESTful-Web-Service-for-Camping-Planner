const axios = require('axios');

// Google Maps API Key from environment variables
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const getRouteRecommendations = async (req, res) => {
    const { startingLocation } = req.query;

    if (!startingLocation) {
        return res.status(400).json({ error: 'Please provide a starting location' });
    }

    try {
        // Use Places API to find camping locations near the starting point
        const placesResponse = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
            params: {
                key: GOOGLE_MAPS_API_KEY,
                location: startingLocation, // Format: "latitude,longitude"
                radius: 50000, // Search within 50 km radius
                keyword: 'camping',
            },
        });

        const places = placesResponse.data.results;

        if (places.length === 0) {
            return res.status(404).json({ message: 'No camping routes found near the starting location.' });
        }

        // Create route suggestions using Directions API
        const routePromises = places.slice(0, 5).map(async (place) => {
            const directionsResponse = await axios.get('https://maps.googleapis.com/maps/api/directions/json', {
                params: {
                    key: GOOGLE_MAPS_API_KEY,
                    origin: startingLocation,
                    destination: `${place.geometry.location.lat},${place.geometry.location.lng}`,
                },
            });

            const route = directionsResponse.data.routes[0];
            return {
                name: place.name,
                address: place.vicinity,
                distance: route?.legs[0]?.distance?.text || 'Unknown',
                duration: route?.legs[0]?.duration?.text || 'Unknown',
            };
        });

        const recommendations = await Promise.all(routePromises);

        res.json({ startingLocation, recommendations });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching route recommendations.' });
    }
};

module.exports = { getRouteRecommendations };
