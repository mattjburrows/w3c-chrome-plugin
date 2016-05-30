export default (url) => {
    return fetch(`https://validator.w3.org/nu/?doc=${url}&out=json`)
      .then((response) => response.json());
}
