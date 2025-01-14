
const API_URL_INGREDIENTS = `https://kaotika-server.fly.dev/ingredients`
const API_URL_DISEASES = `https://kaotika-server.fly.dev/diseases`
const API_URL_PARCHMENT = `https://kaotika-server.fly.dev/ingredients/zachariah-herbal`

export const getIngredients = async () => {
    try {
        let response = await fetch(API_URL_INGREDIENTS);
        let json = await response.json();
        let ingredientsApi = json.data;
        const ingredients = ingredientsApi.map(({_id, name, description, value, effects, image, type}) => ({
            key: String(_id),
            name,
            description,
            value,
            effects,
            image: (`https://kaotika.vercel.app`+ image),
            type
        }));        
        return { success: true, data: ingredients }; // Return success response with ingredients
    } catch (error) {
        console.error("Failed to fetch ingredients:", error);
        return { success: false, error: error.message }; // Return error response
    }
}


export const getDiseases = async () => {
    try {
        const response = await fetch(API_URL_DISEASES);
        const diseasesJson = await response.json();
        const API_Diseases = diseasesJson.data;
        const diseases = [...API_Diseases]; 
        return diseases;
    } catch (error) {
        console.error("Failed to fetch diseases:", error);
        return undefined;
    }
}

export const getParchmentIngredients = async () => {
  try {
      let response = await fetch(API_URL_PARCHMENT);
      let json = await response.json();
      
      let ingredientsApi = json.data["Zachariah's herbal"].ingredients;
      const ingredients = ingredientsApi
        .map(({ _id, name, description, value, effects, image, type }) => ({
            key: String(_id),
            name,
            description,
            value,
            effects,
            image: (`https://kaotika.vercel.app`+ image),
            type
        }));

      return { success: true, data: ingredients }; // Return success response with filtered ingredients
  } catch (error) {
      console.error("Failed to fetch parchment ingredients:", error);
      return { success: false, error: error.message }; // Return error response
  }
};