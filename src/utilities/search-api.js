const BASE_URL = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?pageNumber=1&pageSize=10&autoCorrect=true&safeSearch=true&q='

export function imageSearch(searchString) {
    return makeRequest(searchString);
}

async function makeRequest(searchString) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '40c7d63e28mshc3d5a4e0078a393p1840fajsn9079e1215018',
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    }

    const res = await fetch(`${BASE_URL}${searchString}}`, options);
    const data = await res.json();
    if (res.ok) return data.value;
    throw new Error('Bad Search Request');
};