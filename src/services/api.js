const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

const username = "coalition";
const password = "skills-test";

const credentialsEncoded = btoa(`${username}:${password}`);

export const fetchPatients = async () => {
    try {
        const response = await fetch(API_URL,{
            headers: {
                Authorization: `Basic ${credentialsEncoded}`,
            },
        });
        if(!response.ok) {
            throw new Error("Failed to fetch patients");
        }

        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
        throw error;
    }
};