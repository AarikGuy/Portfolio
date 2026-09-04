const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function sendEmail(formData) {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
    // const response = await fetch("http://localhost:5253/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    });

    if(!response.ok){
        throw new Error("Failed to send feedback");
    }

    return response.json();
}