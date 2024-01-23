const tickets = [...document.querySelectorAll('.ticket')];

const links = {
    ticket_1: "https://forms.gle/zQaT55RGVn337qo6A",
    ticket_2: "https://forms.gle/UArygjKY4PCpo1Q9A",
    ticket_3: "https://forms.gle/Y8PZrfPEzMjVMHpWA",
    ticket_4: "https://docs.google.com/forms/d/e/1FAIpQLSdUeYmzj1gp3bFg0OqTAez4tyFSuB3KdE0naPggskfbvxmnpg/viewform",
}

tickets.map(ticket=>{;
    ticket.onclick = event => {
        var link = event.target.classList.contains('ticket-1') ? links.ticket_1 :
                   event.target.classList.contains('ticket-2') ? links.ticket_2 :
                   event.target.classList.contains('ticket-3') ? links.ticket_3 :
                   event.target.classList.contains('ticket-4') ? links.ticket_4 :
                   null

        if (link) {
            window.location.href = link
        }
    }
})

document.getElementById('ticket-1').onclick = event =>{
    window.location.href = links.ticket_1;
}
document.getElementById('ticket-2').onclick = event =>{
    window.location.href = links.ticket_2;
}
document.getElementById('ticket-3').onclick = event =>{
    window.location.href = links.ticket_3;
}
document.getElementById('ticket-3').onclick = event =>{
    window.location.href = links.ticket_4;
}
