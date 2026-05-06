
export async function sendEmail(formData) {
    const response = await fetch("http://localhost:5253/api/contact", {
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