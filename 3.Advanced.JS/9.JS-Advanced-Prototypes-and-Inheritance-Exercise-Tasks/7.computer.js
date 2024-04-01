function solution() {
    class Post {
        constructor(title, content) {
            this.title = title || "No title"; // Default to "No title" if title is falsy
            this.content = content || "No content"; // Default to "No content" if content is falsy
        }
    
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }
    
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            // Ensure likes and dislikes are converted to numbers
            this.likes = Number.isInteger(Number(likes)) ? Number(likes) : 0; 
            this.dislikes = Number.isInteger(Number(dislikes)) ? Number(dislikes) : 0; 
            this.comments = [];
        }
    
        addComment(comment) {
            if (typeof comment === "string" && comment.trim() !== "") {
                this.comments.push(comment);
            }
        }
    
        toString() {
            let rating = this.likes - this.dislikes;
            let result = super.toString() + `\nRating: ${rating}`;
            if (this.comments.length > 0) {
                result += `\nComments:\n` + this.comments.map(comment => ` * ${comment}`).join('\n');
            }
            return result;
        }
    }
    
    class BlogPost extends Post {
        constructor(title, content, views = 0) {
            super(title, content);
            this.views = Number.isInteger(views) ? views : 0; // Default to 0 if views is not a number
        }
    
        view() {
            this.views++;
            return this; // Allows for chaining
        }
    
        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }
    
return {
    Post,
    SocialMediaPost,
    BlogPost
};

}