/* =========================================================
   💌 OUR LITTLE POST OFFICE
   =========================================================

   This is the only file you need to edit when you want
   to add a new letter.

   Everything else below handles the website automatically.
========================================================= */


/* =========================================================
   💌 YOUR LETTERS
   =========================================================

   TO ADD A NEW LETTER:

   1. Copy one of the letter objects below.
   2. Give it a unique ID.
   3. Change the date.
   4. Change the title.
   5. Write your message.
   6. Save the file.
   7. Push it to GitHub.

   IMPORTANT:
   Keep "read" as false.

   The website will automatically remember when Myss
   has opened the letter.
========================================================= */

const letters = [

    {
        id: "2026-08-22-01",

        date: "August 22, 2026",

        title: "A little something for you",

        message: `Hi M'lady,
        I thought I'd do something a little cute, or atleast try to do something a little cute.
        I feel like I don't send you enough Love letters, and I really wanted to chagne that a bit
        I want to make sure that you realize that I Love you, I mean I hope you realize after all this time, but just to be sure x.
        So anyway, here we go, I hope you enjoy this little mailbox I made you, don't worry I'll still give you physical letters, but this is a start.

        
        To my dear girlfriend,
        I wanted to just tell you how much I actually Love you, 
        and I know that the things I will say might sound a bit cringe and cliché, but I feel like
        sometimes there's a time and a place for all kind of things in life, and this is the time
        to be cliché and cringey. 
        You know that every time I listen to a Love song, or honestly just any song that makes me feel happy,
        I think about you.
        I just imagine us two, sitting together and that little bench with your super super big tissue that you brought,
        I really Love thinking back to that place, I think it genuinly is one of the best moments of my life so far. 
        I don't even know why, it's such a simple moment, but it really had a big impact on me.
        And I think that that big impact is the same type of impact you have left on the rest of my life,
        you make me realize that Love doesn't have to be this big spectacle of showering the other person with gifts,
        it's just showing up for eachother and choosing each other every single day, and I'm so glad to wake up every day,
        choosing you.
        You would have no idea how much I'm actually looking forward to the next three years, just spending time with you,
        doing the little things together like eating dinner together, choosing which movie we're going to watch,
        showering together (we'll get there one day, I believe). I can't wait to do all these little things with you,
        and I'll make sure to, when we get there, enjoy them as much as I am craving them now. 
        I can't wait to share my little life with you Myss.
        
        I Love you, enjoy the rest of Edinburgh, and when you return, you'll be in my arms until you get bored of me.
        
        Your boyfriend.
        `
    },


    /*
    =====================================================
    EXAMPLE OF ANOTHER LETTER

    Copy this structure whenever you want to add one.

    {
        id: "2026-08-25-01",

        date: "August 25, 2026",

        title: "For when you miss me",

        message: `My love,

        If you're reading this, I hope you're having
        a good day.

        I just wanted to remind you that I'm thinking
        about you.

        Love,
        Dries ❤️`
    },

    =====================================================
    */

];


/* =========================================================
   STORAGE
========================================================= */

const STORAGE_KEY = "our-little-post-office-read-letters";


function getReadLetters() {

    try {

        const stored = localStorage.getItem(STORAGE_KEY);

        if (!stored) {
            return [];
        }

        return JSON.parse(stored);

    } catch (error) {

        console.error("Could not read saved letters:", error);

        return [];
    }
}


function saveReadLetters(readLetters) {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(readLetters)
        );

    } catch (error) {

        console.error("Could not save read letters:", error);
    }
}


function isLetterRead(letterId) {

    const readLetters = getReadLetters();

    return readLetters.includes(letterId);
}


function markLetterAsRead(letterId) {

    const readLetters = getReadLetters();

    if (!readLetters.includes(letterId)) {

        readLetters.push(letterId);

        saveReadLetters(readLetters);
    }
}


/* =========================================================
   SCREEN NAVIGATION
========================================================= */

const homeScreen = document.getElementById("home-screen");
const mailboxScreen = document.getElementById("mailbox-screen");

const mailboxTitle = document.getElementById("mailbox-title");

const unreadLettersContainer =
    document.getElementById("unread-letters");

const readLettersContainer =
    document.getElementById("read-letters");

const readTitle =
    document.getElementById("read-title");

const mailCount =
    document.getElementById("mail-count");

const newMailBanner =
    document.getElementById("new-mail-banner");

const newMailText =
    document.getElementById("new-mail-text");

const homeFlag =
    document.getElementById("home-flag");

const homeMailHint =
    document.getElementById("home-mail-hint");


let currentMailbox = "myss";
let currentLetter = null;


/* =========================================================
   OPEN MAILBOX
========================================================= */

function openMailbox(mailbox) {

    currentMailbox = mailbox;

    homeScreen.classList.remove("active");

    mailboxScreen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    if (mailbox === "myss") {

        mailboxTitle.textContent = "Myss' Mailbox";

        renderMyssMailbox();

    } else {

        mailboxTitle.textContent = "Dries' Mailbox";

        renderDriesMailbox();
    }
}


/* =========================================================
   GO HOME
========================================================= */

function goHome() {

    mailboxScreen.classList.remove("active");

    homeScreen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    updateHomeMailbox();
}


/* =========================================================
   RENDER MYSS' MAILBOX
========================================================= */

function renderMyssMailbox() {

    const unread = letters.filter(
        letter => !isLetterRead(letter.id)
    );

    const read = letters.filter(
        letter => isLetterRead(letter.id)
    );


    /*
       Newest letters first.
    */

    unread.sort((a, b) => {

        return b.id.localeCompare(a.id);

    });


    /*
       Old letters at the bottom.

       Newest read letter first among the read letters.
    */

    read.sort((a, b) => {

        return b.id.localeCompare(a.id);

    });


    renderLetters(
        unread,
        unreadLettersContainer,
        false
    );

    renderLetters(
        read,
        readLettersContainer,
        true
    );


    updateMailCount(unread, read);

    updateNewMailBanner(unread);

}


/* =========================================================
   DRIES' MAILBOX
=========================================================

   We don't actually need this mailbox for now.

   It's here because I thought it would be cute to have
   both mailboxes on the front page.
========================================================= */

function renderDriesMailbox() {

    unreadLettersContainer.innerHTML = `
        <div class="empty-mailbox">

            <div class="empty-icon">
                📭
            </div>

            <h3>Your mailbox is quiet.</h3>

            <p>
                This mailbox is currently just for show ♡
            </p>

        </div>
    `;

    readLettersContainer.innerHTML = "";

    readTitle.style.display = "none";

    newMailBanner.classList.add("hidden");

    mailCount.textContent = "Just you";

}


/* =========================================================
   RENDER LETTERS
========================================================= */

function renderLetters(
    letterArray,
    container,
    isRead
) {

    container.innerHTML = "";


    if (letterArray.length === 0) {

        if (!isRead) {

            container.innerHTML = `
                <div class="empty-mailbox">

                    <div class="empty-icon">
                        📭
                    </div>

                    <h3>No new letters</h3>

                    <p>
                        Maybe there's something on its way... ♡
                    </p>

                </div>
            `;

        }

        return;
    }


    if (isRead) {

        readTitle.style.display = "flex";

    } else {

        readTitle.style.display = "flex";

    }


    letterArray.forEach(letter => {

        const card = createLetterCard(
            letter,
            isRead
        );

        container.appendChild(card);

    });
}


/* =========================================================
   CREATE LETTER CARD
========================================================= */

function createLetterCard(letter, isRead) {

    const button = document.createElement("button");

    button.className = "letter-card";

    if (!isRead) {

        button.classList.add("unread");

    }


    const newLabel = !isRead
        ? `<span class="card-new">New</span>`
        : "";


    button.innerHTML = `

        <div class="card-envelope">
        </div>

        <div class="card-info">

            <div class="card-title">

                ${escapeHTML(letter.title)}

                ${newLabel}

            </div>

            <div class="card-date">

                ${escapeHTML(letter.date)}

                ${isRead ? " • opened" : ""}

            </div>

        </div>

        <div class="card-arrow">
            →
        </div>
    `;


    button.addEventListener(
        "click",
        () => openLetter(letter)
    );


    return button;
}


/* =========================================================
   OPEN LETTER
========================================================= */

function openLetter(letter) {

    currentLetter = letter;


    /*
       The letter gets marked as read immediately when
       the envelope is opened.
    */

    markLetterAsRead(letter.id);


    const overlay =
        document.getElementById("letter-overlay");

    const envelopeContainer =
        document.getElementById("envelope-container");

    const letterPaper =
        document.getElementById("letter-paper");


    const dateElement =
        document.getElementById("letter-date");

    const titleElement =
        document.getElementById("letter-title");

    const messageElement =
        document.getElementById("letter-message");


    dateElement.textContent =
        letter.date;

    titleElement.textContent =
        letter.title;

    messageElement.textContent =
        letter.message;


    /*
       Reset animation state.
    */

    envelopeContainer.classList.remove("opening");

    letterPaper.classList.remove("visible");


    overlay.classList.add("active");

    document.body.style.overflow = "hidden";


    /*
       Wait for the envelope animation to finish,
       then reveal the actual letter.
    */

    setTimeout(() => {

        envelopeContainer.classList.add("opening");

    }, 350);


    setTimeout(() => {

        envelopeContainer.style.display = "none";

        letterPaper.classList.add("visible");

    }, 1400);
}


/* =========================================================
   CLOSE LETTER
========================================================= */

function closeLetter() {

    const overlay =
        document.getElementById("letter-overlay");

    const envelopeContainer =
        document.getElementById("envelope-container");

    const letterPaper =
        document.getElementById("letter-paper");


    overlay.classList.remove("active");

    document.body.style.overflow = "";


    /*
       Reset the envelope for next time.
    */

    setTimeout(() => {

        envelopeContainer.style.display = "flex";

        envelopeContainer.classList.remove("opening");

        letterPaper.classList.remove("visible");

    }, 300);


    /*
       Refresh the mailbox behind the scenes so that
       the letter moves into the "opened" section.
    */

    if (currentMailbox === "myss") {

        renderMyssMailbox();

    }
}


/* =========================================================
   ENVELOPE CLICK
========================================================= */

document
    .getElementById("envelope-container")
    .addEventListener("click", function() {

        if (!this.classList.contains("opening")) {

            this.classList.add("opening");

        }
    });


/* =========================================================
   MAIL COUNT
========================================================= */

function updateMailCount(unread, read) {

    const total = unread.length + read.length;


    if (total === 0) {

        mailCount.textContent = "No letters";

    } else if (total === 1) {

        mailCount.textContent = "1 letter";

    } else {

        mailCount.textContent =
            `${total} letters`;
    }
}


/* =========================================================
   NEW MAIL BANNER
========================================================= */

function updateNewMailBanner(unread) {

    if (unread.length === 0) {

        newMailBanner.classList.add("hidden");

        homeFlag.classList.remove("raised");

        homeMailHint.textContent =
            "No new mail right now ♡";

        return;
    }


    newMailBanner.classList.remove("hidden");


    if (unread.length === 1) {

        newMailText.textContent =
            "There is a little something waiting for you.";

    } else {

        newMailText.textContent =
            `There are ${unread.length} little surprises waiting for you.`;
    }


    /*
       Raise the physical mailbox flag.
    */

    homeFlag.classList.add("raised");

    homeMailHint.textContent =
        unread.length === 1
            ? "You have a new letter!"
            : `You have ${unread.length} new letters!`;
}


/* =========================================================
   UPDATE HOME MAILBOX
========================================================= */

function updateHomeMailbox() {

    const unreadCount =
        letters.filter(
            letter => !isLetterRead(letter.id)
        ).length;


    if (unreadCount > 0) {

        homeFlag.classList.add("raised");

        homeMailHint.textContent =
            unreadCount === 1
                ? "You have a new letter!"
                : `You have ${unreadCount} new letters!`;

    } else {

        homeFlag.classList.remove("raised");

        homeMailHint.textContent =
            "No new mail right now ♡";
    }
}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            const overlay =
                document.getElementById("letter-overlay");

            if (overlay.classList.contains("active")) {

                closeLetter();

            }
        }
    }
);


/* =========================================================
   HTML ESCAPING
=========================================================

   This keeps titles safe if you accidentally use characters
   such as < or > in a letter title.
========================================================= */

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


/* =========================================================
   STARTUP
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateHomeMailbox();

    }
);