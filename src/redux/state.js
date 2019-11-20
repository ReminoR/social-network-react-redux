import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'Hi, my friend, keep in touch', likesCount: 13},
            {id: 3, message: 'Blabla', likesCount: 20},
            {id: 4, message: 'Yes', likesCount: 130}
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Димыч'},
            {id: 2, name: 'Леонид'},
            {id: 3, name: 'Наталья'},
            {id: 4, name: 'Андрей'},
            {id: 5, name: 'Светлана'},
            {id: 6, name: 'Виктор'},
            {id: 7, name: 'Алена'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'YO'},
            {id: 4, message: 'Wow'},
        ]
    },
    sidebar: {
        friends: [
            {id: 1, ava_url: 'https://cdn4.iconfinder.com/data/icons/avatars-circle-2/72/146-512.png'},
            {id: 2, ava_url: 'https://cdn4.iconfinder.com/data/icons/social-messaging-productivity/64/x-01-512.png'},
            {id: 3, ava_url: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_4-512.png'},
        ]
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';

    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);

}

export default state;
