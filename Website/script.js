const images = ["digital1.jpg","digita2.jpg","digital3.jpg","digital4.jpg","digital5.jpg"]
const wrapper = document.getElementById("wrapper");
let show = 0
function get(){
    wrapper.innerHTML = `
        <img src=${images[show]} alt="coding">
        <div class="cover">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <div class="text">
                    <h2>Eductaion Free Online Training Course</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <button>Get Stared</button>
            </div>
            </div>
    `
}
function foward(){
    if(show === images.length - 1){
        show = 0;
        get()
    }else{
        show += 1;
        get()
    }
}
setInterval(() => {
    foward()
}, 2000);
get()