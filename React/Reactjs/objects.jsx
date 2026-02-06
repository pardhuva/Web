import React from "react"
import avatar from "./images/user.png"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
     let staricon = contact.isFavourite ? starFilled:starEmpty

    function toggleFavorite() {
        setContact(prevcontact =>({
             ...prevcontact,
                isFavourite : !prevcontact.isFavourite
        })
    )
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavourite}
                        arial-label = {contact.isFavourite ? "Remove from Favourites" : "Add to favourites"}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt= {contact.isFavourite ? "filled star icon" : "Empty star icon"}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {firstName}{lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}