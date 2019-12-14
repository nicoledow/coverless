User.create(name: "Nikki", email: "nicoledowdev@gmail.com", password_digest: "donut")


Author.create(name: "J.K. Rowling")
Author.create(name: "Steven King")

Book.create(title: "Harry Potter and the Sorcerer's Stone", author_id: 1, blurb: "A young boy finds out he's a wizard")
Book.create(title: "The Casual Vacancy", author_id: 1, blurb: "There is an election.")
Book.create(title: "It", author_id: 2, blurb: "There's a scary clown named Pennywise terrorizing kids")

Review.create(book_id: 1, rating: 5, content: "I love this book!", user_id: 1)
Review.create(book_id: 1, rating: 5, content: "My favorite book of my childhood.", user_id: 1)
Review.create(book_id: 2, rating: 4, content: "Not as amazing as HP, but I like it", user_id: 1)
Review.create(book_id: 3, rating: 2, content: "Scary clowns aren't my thing, so I didn't like this book very much.", user_id: 1)