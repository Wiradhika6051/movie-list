const movies_list = [
    {
        "id":0,
        "name": "Interstellar",
        "desc": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "short_name": "interstellar"
    },
    {
        "id":1,
        "name": "Battle of Surabaya",
        "desc": "Musa, a thirteen-year-old shoe shiner, with Yumna, undergoes destiny through their adventure of waging war during the war time. Will they manage to bring peace among the troops keeping on fighting for nothing?" ,
        "short_name": "battle_of_surabaya"
    },
    {
        "id":2,      
        "name": "I Want to Eat Your Pancreas",
        "desc": "A high school student discovers one of his classmates, Sakura Yamauchi, is suffering from a terminal illness. This secret brings the two together, as she lives out her final moments..",
        "short_name": "kimisui" 
    },
    {
        "id":3,
        "name": "Star Trek: First Contact",
        "desc": "The Borg travel back in time intent on preventing Earth's first contact with an alien species. Captain Picard and his crew pursue them to ensure that Zefram Cochrane makes his maiden flight reaching warp speed.",
        "short_name": "st_first_contact"
    },
    {
        "id":4,
        "name": "Your Lie in April",
        "desc": "A piano prodigy who lost his ability to play after suffering a traumatic event in his childhood is forced back into the spotlight by an eccentric girl with a secret of her own.",
        "short_name": "shigatsu"
    },
    {
        "id":5,
        "name":"Zutto Mae Kara Suki Deshita. ~Kokuhaku Jikkou Iinkai~",
        "desc":"A girl finally confessed her love, but she retracted it as a joke when her love interest did not show any reaction. She will need to gather up her courage to confess for real.",
        "short_name": "zutto_mae_kara"
    },
    {
        "id":6,
        "name":"Suki ni Naru Sono Shunkan o: Kokuhaku Jikkou Iinkai",
        "desc":"Following Natsuki Enomoto's confession rehearsals with Yuu Setoguchi, their younger siblings Kotarou and Hina struggle to confess their own love. Despite a disastrous first meeting in middle school with her upperclassman Koyuki Ayase, Hina’s heart is captured by his warm smile. Initially confused by these newfound feelings, Hina soon realizes that she has fallen in love for the very first time.Chasing after her brother Yuu and her crush Koyuki, Hina also enrolls in Sakuragaoka High School; but the threads of love are far-reaching, and they entangle Hina and her friends. Boisterous but sensitive, Hina hopes to confess her feelings to the tender-hearted Koyuki. Meanwhile, Kotarou, oblivious to his own feelings for her, is determined to always keep Hina smiling.Suki ni Naru Sono Shunkan wo.: Kokuhaku Jikkou linkai follows Hina, Kotarou, and Koyuki in high school. Their youthful love forges new relationships, but also threatens to break others.",
        "short_name":"suki_ni_naru",
    },
    {
        "id":7,
        "name":"Negeri 5 Menara",
        "desc":"Six best friends in the Islamic Boarding School often hang out near the mosque towers. All of them made a promise under the tower that one day, they will go to places that they have been dreaming about.",
        "short_name":"5_menara",
    },
    {
        "id":8,
        "name":"Nussa: The Movie",
        "desc":"Nussa's life changed when he met a new friend who was much more liked by his friends than himself.",
        "short_name":"nussa",
    },
    {
        "id":9,
        "name":"Your Name",
        "desc":"Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        "short_name" :"kimi_no_nawa",
    },
    {
        "id":10,
        "name":"Stand by Me Doraemon",
        "desc":"What will happen to Nobita's life after Doraemon leaves?",
        "short_name":"doraemon",
    },
    {
        "id":11,
        "name":"Tanah Surga... Katanya",
        "desc":"A family lives in the frontier between Indonesia and Malaysia. But his son chooses to live in Malaysia because, in Indonesia, the government is not taking care of people in the frontier and his life in Malaysia is much better.",
        "short_name":"tanah_surga",
    },
];
//fungsi
var insertHTML = function(selector,content){
    //fungsi yang menyisipkn content ke sebuah selector html
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = content;
}
var makeCard = function(title,description,short_name,id){
    //fungsi untuk membuat card
    var template = '<div class="movie">';
    template += '<img src="images/'+short_name+'.jpg" alt="'+title+'" class="image">';
    template += '<h2 class="title">'+title+'</h2>';
    template += '<p class="desc">'+description+'</p>';
    //template += '<button onclick="loadDetail('+id+')">'+'Detail</button></div><br\>';
    //template += '<button type="button" onclick="invoke" name="loadDetail" data-arg1="'+title+'" data-arg2="'+description+'" data-arg3="'+short_name+'">Detail</button></div><br\>';
    template += '<button type="button" class="detButton" onclick="location.href=\'detail_page/'+short_name+'.html\';"'+'>Detail</button></div><br\>'
    return template;
}
function loadDetail(id){
    //fungsi untuk memuat halaman detail
    id = parseInt(id);
    let movie = movies_list[id];
    location.href = 'detail_page/'+movie.short_name+'.html';
   // makeDescription(movie);
}/*
function makeDescription(movie){
    //mengisi halaman deskripsi
    var template = '<div class="detail">';
    template += '<image src="../images/'+movie.short_name+'.jpg" alt="'+movie.name+'" class="image">';
    template += '<h2 class="title">'+movie.name+'</h2>';
    template += '<p class="desc">'+movie.desc+'</p>';
    //console.log(location.href);
    alert(template);
    insertHTML("#movie-detail",template);
}*/
/*
var invoke = (event)=>{
    //let nameOfFunction = this[event.target.name];
    console.log("Nyahallo");
    let title = event.target.getAttribute('data-arg1');
    let description = event.target.getAttribute('data-arg2');
    let short_name = event.target.getAttribute('data-arg3');
    //window[nameOfFunction](title,description,short_name)
    loadDetail(title,description,short_name);
};*/
//membuat card dan menyisipkannya
let finalCard = "";
for(let i=0;i<movies_list.length;i++){
    let title = movies_list[i]["name"];
    let description = movies_list[i]["desc"];
    let image_path = movies_list[i]["short_name"];
    let id = movies_list[i]["id"];
    let card = makeCard(title,description,image_path,id);
    finalCard += card;
}
insertHTML("#movie-list",finalCard);
