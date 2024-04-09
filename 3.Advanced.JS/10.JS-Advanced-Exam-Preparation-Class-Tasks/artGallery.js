class ArtGallery {
    constructor(creator) {
      this.creator = creator;
      this.possibleArticles = { picture: 200, photo: 50, item: 250 };
      this.listOfArticles = [];
      this.guests = [];
    }
    addArticle(articleModel, articleName, quantity) {
      articleModel = articleModel.toLowerCase();
      let isInArray = false;
  
      if (!this.possibleArticles[articleModel]) {
        throw new Error("This article model is not included in this gallery!");
      }
      for (const el of this.listOfArticles) {
        if (el.articleModel === articleModel && el.articleName === articleName) {
          el.quantity += Number(quantity);
          isInArray = true;
          break;
        }
      }
      if (!isInArray) {
        this.listOfArticles.push({
          articleModel,
          articleName,
          quantity: Number(quantity),
        });
      }
      return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
    inviteGuest(guestName, personality) {
      for (let guest of this.guests) {
        if (guest.guestName === guestName) {
          throw new Error(`${guestName} has already been invited.`);
        }
      }
      let obj = { guestName, points: 0, purchaseArticle: 0 };
      switch (personality) {
        case "Vip":
          obj.points = 500;
          break;
        case "Middle":
          obj.points = 250;
          break;
        default:
          obj.points = 50;
          break;
      }
      this.guests.push(obj);
      return `You have successfully invited ${guestName}!`;
    }
    buyArticle(articleModel, articleName, guestName) {
        let findModel = this.listOfArticles.find((x) => { return x.articleModel === articleModel.toLowerCase() && x.articleName === articleName });
        let guest = this.guests.find((x) => { return x.guestName === guestName });
        if (!findModel) {
            throw new Error("This article is not found.")
        }
        if (findModel.quantity === 0) {
            return `The ${articleName} is not available.`;
        }
        if (!guest) {
            return "This guest is not invited.";
        }
        let neededPoints = Number(this.possibleArticles[articleModel.toLowerCase()]);
        let userPoints = Number(guest.points);

        if (neededPoints <= userPoints) {

            guest.points -= neededPoints;

            findModel.quantity -= 1;

            guest.purchaseArticle += 1;

        } else {

            return "You need to more points to purchase the article.";

        }



        return `${guestName} successfully purchased the article worth ${neededPoints} points.`

    }
    showGalleryInfo (criteria){
      if(criteria === "article"){
          let result = "Articles information:\n";
       
          this.listOfArticles.forEach((x) => result += `${x.articleModel} - ${x.articleName} - ${x.quantity}\n`)
          return result.trim();
       
      }else{
          let result = "Guests information:\n";
       
          this.guests.forEach((x) => result += `${x.guestName} - ${x.purchaseArticle}\n`)
          return result.trim();
      }
      }
  }

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));




