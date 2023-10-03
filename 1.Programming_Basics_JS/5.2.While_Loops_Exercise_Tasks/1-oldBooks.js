function oldBooks(input){
    let index = 0;
    let bookNeeded = input[index];
    index++;
    let curBook = input[index];
    index++;
    let booksCount = 0;

    while(curBook !== "No More Books"){
        
        if(curBook === bookNeeded){
            console.log(`You checked ${booksCount} books and found it.`);
            return;
        }else{
            booksCount += 1;
            curBook = input[index];
            index++;
        }
    }
    console.log(`The book you search is not here!`);
    console.log(`You checked ${booksCount} books.`);
}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])