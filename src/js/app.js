/**
 * This function retrieves movie details from the OMDB API based on user input and displays the results
 * on the webpage.
 */
const getMovieDetails = () => {
  let movieName = inputField.value;
  let apiUrl = `http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}&plot=full`;

  //   If Input field is empty.
  if (movieName.trim().length <= 0) {
    errorMessage.innerText = "Please type the movie name first.";
  }
  // If input field is not empty
  else {
    fetch(apiUrl).then((response) =>
      response.json().then((data) => {
        if (data.Response == "False") {
          errorMessage.innerText = data.Error;
        } else {
          form.style.display = "none";
          resultDiv.innerHTML = resultPage(data);
        }
      })
    );
  }
};

/**
 * The function takes a string of movie languages separated by commas and returns an HTML string of
 * language tags.
 * @param langs - The `langs` parameter is a string that contains a comma-separated list of languages
 * for a movie.
 * @returns The function `getMovieLanguages` returns a string of HTML code that contains a series of
 * `span` elements with class and text content based on the input `langs` parameter. The `span`
 * elements are created using a loop that iterates over an array of language codes obtained by
 * splitting the `langs` string using commas as separators. The resulting HTML code can be used to
 * display the language codes
 */
const getMovieLanguages = (langs) => {
  let langArr = langs.split(",");
  let langInnerHTML = "";
  for (let index = 0; index < langArr.length; index++) {
    langInnerHTML += `<span
    class="inline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-background mr-2 mb-2">#${langArr[
      index
    ].trim()}</span>`;
  }
  return langInnerHTML;
};

/**
 * The function returns a string of HTML code for displaying movie details with a title and
 * corresponding data.
 * @param title - The title of a movie detail, such as "Director" or "Release Date".
 * @param data - The data parameter is a string that represents the information or details related to a
 * movie. It could be the movie's release date, director, cast, plot summary, or any other relevant
 * information.
 * @returns The function `getMovieDetailsParts` returns an HTML string that represents a section of a
 * movie details page. The string contains a `div` element with a `grid` layout, consisting of a `dt`
 * element for the title and a `dd` element for the data. The `title` and `data` parameters are used to
 * populate the text content of these elements. The `sm
 */
const getMovieDetailsParts = (title, data) => {
  return `<div class="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
    <dt class="text-sm font-semibold text-textColor">${title}</dt>
    <dd class="mt-1 text-sm text-secondary sm:col-span-2 sm:mt-0">${data}</dd></div>`;
};

/**
 * The function resets the search form by displaying it, clearing the result div, and resetting the
 * input field.
 */
const resetSearch = () => {
  form.style.display = "block";
  resultDiv.innerHTML = "";
  inputField.value = "";
};

/**
 * The function returns a theme icon based on the input theme.
 * @param theme - The parameter `theme` is a string that represents the current theme of the
 * application. It can be either "dark" or "light".
 * @returns The function `getThemeIcon` returns either the `darkThemeIcon` or `lightThemeIcon`
 * depending on the value of the `theme` parameter. If `theme` is equal to "dark", then `darkThemeIcon`
 * is returned, otherwise `lightThemeIcon` is returned.
 */
const getThemeIcon = (theme) => {
  return theme === "dark" ? darkThemeIcon : lightThemeIcon;
};

/**
 * The function toggles between light and dark themes for the app.
 */
const setAppTheme = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    themeIcon.innerHTML = getThemeIcon("dark");
  } else {
    document.documentElement.classList.add("dark");
    themeIcon.innerHTML = getThemeIcon("light");
  }
};
setAppTheme();

const resultPage = (apiData) => {
  return `
          <div class="flex flex-col items-center md:flex-row">
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="${
            apiData.Poster
          }" alt="">
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight flex justify-between text-textColor">
                  <span>${apiData.Title}</span>
                  <span class="flex items-center"> ${
                    apiData.Ratings[0].Value
                  }<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                  </span>
              </h5>
              <p class="mb-3 font-normal text-secondary">${apiData.Plot}</p>
          </div>
      </div>
      <div class="">
          ${getMovieDetailsParts("Actors", apiData.Actors)}
          ${getMovieDetailsParts("Writers", apiData.Writer)}
          ${getMovieDetailsParts("Genre", apiData.Genre)}
      </div>
      <div class="movie-languages">
          <label for="movie-search" class="block mb-2 text-sm font-medium text-textColor">Languages</label>
          ${getMovieLanguages(apiData.Language)}
      </div>
      <a onclick="resetSearch()" class="flex items-center justify-end w-full px-5 py-3 mb-3 
      text-base font-semibold text-textColor no-underline 
      align-middle cursor-pointer">
        Search again
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
        `;
};
