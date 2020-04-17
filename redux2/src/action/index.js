const url = "http://localhost:8900";
const articleUrl = "http://localhost:8900/articles";
const galleryUrl = "http://localhost:8900/galleries";

export function latestNews() {
  const output = fetch(`${url}/articles?_end=3`, {
    method: "GET",
  }).then((data) => data.json());

  return {
    type: "GET_LATEST",
    payload: output,
  };
}

export function articleNews() {
  const output = fetch(`${url}/articles?_start=3&_end=10`, {
    method: "GET",
  }).then((data) => data.json());

  return {
    type: "GET_ARTICLE",
    payload: output,
  };
}

export function galleryNews() {
  const output = fetch(`${url}/galleries?_limit=2`, {
    method: "GET",
  }).then((data) => data.json());

  return {
    type: "GET_GALLERY",
    payload: output,
  };
}

export function selectedNews(id) {
  const output = fetch(`${url}/articles?id=${id}`, {
    method: "GET",
  }).then((data) => data.json());

  return {
    type: "SELECTED_NEWS",
    payload: output,
  };
}

export function selectedGalleryNews(id) {
  const output = fetch(`${url}/galleries?id=${id}`, {
    method: "GET",
  }).then((data) => data.json());

  return {
    type: "SELECTED_GALLERY_NEWS",
    payload: output,
  };
}

export function clearSelectedNews() {
  return {
    type: "CLEAR_SELECTED_NEWS",
    payload: [],
  };
}

//patch call for updating just like/dislikes
export function handleLikes(array, id, from) {
  var output = "";
  if (from === "gallery") {
    output = fetch(`${galleryUrl}/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: array }),
    }).then((data) => data.json());
    return {
      type: "HANDLE_LIKES",
      payload: output,
    };
  } else {
    output = fetch(`${articleUrl}/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: array }),
    }).then((data) => data.json());
    return {
      type: "HANDLE_LIKES",
      payload: output,
    };
  }
}
