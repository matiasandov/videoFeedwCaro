//para acceder a los tags tendriamos que acceder a la lista de tags e iterar sobre ella
//buscando el nombre del tag

const videoItems = [
    {
        name: "Video 1",
        iconName: "ondemand_video",
        duration: "3:45",
        tags: [ 'A', 'B', 'C','D'],
        rating: 2.5,
        videoPath: "link",
        genreId: 5

    },

    {
        name: "Video 2",
        iconName: "ondemand_video",
        duration: "3:45",
        tags: [ 'A', 'B', 'C','D'],
        rating: 2.5,
        videoPath: "link",
        genreId: 6

    },

    {
        name: "Video 3",
        iconName: "ondemand_video",
        duration: "3:45",
        tags: [ 'A', 'B', 'C','D'],
        rating: 2.5,
        videoPath: "link",
        genreId: 5

    },
    {
        name: "Video 4",
        iconName: "ondemand_video",
        duration: "3:45",
        tags: [ 'A', 'B', 'C','D'],
        rating: 2.5,
        videoPath: "link",
        genreId: 7

    },
    {
        name: "Video 5",
        iconName: "ondemand_video",
        duration: "3:45",
        tags: [ 'A', 'B', 'C','D'],
        rating: 2.5,
        videoPath: "link",
        genreId: 5

    },
    {
        name: "Video 6",
        iconName: "ondemand_video",
        duration: "3:45",
        tags: [ 'A', 'B', 'C','D'],
        rating: 2.5,
        videoPath: "link",
        genreId: 7

    },
    {
        name: "Video 7",
        iconName: "ondemand_video",
        duration: "3:45",
        tags: [ 'A', 'B', 'C','D'],
        rating: 2.5,
        videoPath: "link",
        genreId: 6

    },
    {
        name: "Video 8",
        iconName: "ondemand_video",
        duration: "3:45",
        tags: [ 'A', 'B', 'C'],
        rating: 2.5,
        videoPath: "link",
        genreId: 6

    },
    {
        name: "Video 9",
        iconName: "ondemand_video",
        duration: "3:45",
        tags: [ 'A', 'B', 'C','D'],
        rating: 2.5,
        videoPath: "link",
        genreId: 5

    },
]

export function getVideos(){
    return videoItems.filter(g => g);
}

export default videoItems;