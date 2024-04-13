function foreignLanguages(country) {
    let result = ''
    switch(country){
        case 'USA':
        case 'England':
        result = 'English';
        break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
        result = 'Spanish';
        break;
        default:
        result = 'unknown'
    }
    console.log(result);
}
foreignLanguages('Mexico')