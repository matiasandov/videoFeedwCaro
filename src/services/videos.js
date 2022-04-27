//para acceder a los tags tendriamos que acceder a la lista de tags e iterar sobre ella
//buscando el nombre del tag

const videoItems = [
    {
        name: "Video 1",
        iconName: "ondemand_video",
        duration: "3:45",
        tags: [ 5,6,7],
        rating: 2.5,
        videoPath: "link",
        genreId: 5,
        stars: "star"

    },

    {
        name: "Video 2",
        iconName: "ondemand_video",
        duration: "3:45",
        tags: [ 6,7],
        rating: 2.5,
        videoPath: "link",
        genreId: 6,
        stars: "star"

    },

    {
        name: "Video 3",
        iconName: "ondemand_video",
        duration: "3:45",
        tags: [4, 7],
        rating: 2.5,
        videoPath: "link",
        genreId: 5,
        stars: "star"

    },
    {
        name: "Video 4",
        iconName: "ondemand_video",
        duration: "3:45",
        tags: [ 2,6],
        rating: 2.5,
        videoPath: "link",
        genreId: 7,
        stars: "star"

    },
    {
        name: "Video 5",
        iconName: "ondemand_video",
        duration: "3:45",
        tags: [ 1,5],
        rating: 2.5,
        videoPath: "link",
        genreId: 5,
        stars: "star"

    },
    {
        name: "Video 6",
        iconName: "ondemand_video",
        duration: "3:45",
        tags: [ 7,8],
        rating: 2.5,
        videoPath: "link",
        genreId: 7,
        stars: "star"

    },
    {
        name: "Video 7",
        iconName: "ondemand_video",
        duration: "3:45",
        tags: [ 5,6,7],
        rating: 2.5,
        videoPath: "link",
        genreId: 6,
        stars: "star"

    },
    {
        name: "Video 8",
        iconName: "ondemand_video",
        duration: "3:45",
        tags: [ 5,2],
        rating: 2.5,
        videoPath: "link",
        genreId: 6,
        stars: "star"

    },
    {
        name: "Video 9",
        iconName: "ondemand_video",
        duration: "3:45",
        tags: [ 6,7],
        rating: 2.5,
        videoPath: "link",
        genreId: 5,
        stars: "star"

    },
]

export function getVideos(){
    return videoItems.filter(g => g);
}

export default videoItems;