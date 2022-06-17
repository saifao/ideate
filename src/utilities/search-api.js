const BASE_URL = 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?pageSize=10&autoCorrect=true&safeSearch=true'

export function imageSearch(searchString, pageNumber) {
    return makeRequest(searchString, pageNumber);
}

async function makeRequest(searchString, pageNumber) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '40c7d63e28mshc3d5a4e0078a393p1840fajsn9079e1215018',
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    }
    console.log(searchString, pageNumber)
    const res = await fetch(`${BASE_URL}&q=${searchString}&pageNumber=${pageNumber}`, options);
    const data = await res.json();
    if (res.ok) return data.value;
    throw new Error('Bad Search Request');
};