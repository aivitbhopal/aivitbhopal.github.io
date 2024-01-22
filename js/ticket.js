const tickets = [...document.querySelectorAll('.ticket')];

tickets.map(ticket=>{;
    ticket.onclick = event => {
        var link = event.target.classList.contains('ticket-1') ? "Link for Pass 1" :
                   event.target.classList.contains('ticket-2') ? "https://docs.google.com/forms/d/e/1FAIpQLSc0H4THSHfY4vlaKNervFnknsMPzW9kjr9f-LOmJk9EhhWIUg/viewform?usp=sharing" :
                   event.target.classList.contains('ticket-3') ? "https://docs.google.com/forms/d/e/1FAIpQLSdYPMDU4DaaUkagyDCYTt7ztqaVnkazCCxn72W8Q2qqrFBUJw/viewform?usp=sharing" :
                   event.target.classList.contains('ticket-4') ? "Link for Combo" :
                   null

        if (link) {
            window.location.href = link
        }
    }
})

document.getElementById('ticket-1').onclick = event =>{
    window.location.href = "Link for Pass 1";
}

document.getElementById('ticket-2').onclick = event =>{
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSc0H4THSHfY4vlaKNervFnknsMPzW9kjr9f-LOmJk9EhhWIUg/viewform?usp=sharing";
}
document.getElementById('ticket-3').onclick = event =>{
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdYPMDU4DaaUkagyDCYTt7ztqaVnkazCCxn72W8Q2qqrFBUJw/viewform?usp=sharing";
}
