class VirtualTryOn {
    async tryOn(personImage, topGarment, bottomGarment = null, resolution = -1, restoreFace = true) {
        try {
            // Validate inputs
            if (!personImage || !topGarment) {
                throw new Error("Both personImage and topGarment are required.");
            }

            // Here you would integrate with your actual try-on API
            const result = await fetch('/api/try-on', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    person_image: personImage,
                    top_garment: topGarment,
                    bottom_garment: bottomGarment,
                    resolution: resolution,
                    restore_face: restoreFace,
                })
            });

            return await result.json();
        } catch (error) {
            console.error("Error during virtual try-on:", error.message);
            throw error;
        }
    }
}

// Make it available globally
window.VirtualTryOn = VirtualTryOn;