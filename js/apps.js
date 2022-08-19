let carObject = {
    vehical: 'Car',
    Brand: 'Suzuki',
    imageUrl: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    farePerKilo: 3,
    capacity: 4,
    description: " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. "
}

let busObject = {
    vehical: 'Bus',
    Brand: 'Suzuki',
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",

    farePerKilo: 2.5,
    capacity: 35,
    description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble."
}

let bikeObject = {
    vehical: 'Bike',
    Brand: 'Suzuki',
    imageUrl: "https://images.unsplash.com/photo-1608461688104-304d5fe60da1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    farePerKilo: 2,
    capacity: 2,
    description: " Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
}

function displayService(object) {
    const mainSection = document.getElementById('main-section');
    const div = document.createElement('div');
    div.innerHTML = `
    
    <div class="card mt-4 mx-auto" style="max-width: 1000px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src=${object.imageUrl} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${object.vehical}</h5>
                        <p class="card-text">${object.description}</p>
                        <p class="card-text">Fare Per Kilo: ${object.farePerKilo}</p>
                        <p class="card-text">Capacity: ${object.capacity}</p>
                    </div>
                </div>
            </div>
        </div>
    
    `
        ;

    mainSection.appendChild(div);

}

displayService(carObject);
displayService(busObject);
displayService(bikeObject);