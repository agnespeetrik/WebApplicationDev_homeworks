import {mount, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Posts from "../../src/components/Posts.vue";
import moment from 'moment'

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);

//Create dummy store
const store = new Vuex.Store({
    state: {
        user: {
            id: 1,
            firstname: 'test',
            lastname: 'test',
            email: 'test',
            avatar: 'test',
        }
    },
    getters: {
        user: (state) => state.user,
    }
});

//Create dummy routes
const routes = [
    {
        path: '/',
        name: 'posts',
    },
    {
        path: '/profiles',
        name: 'profiles'
    }
];

const router = new VueRouter({routes});

const testData = [
    {
        id: 1,
        text: "I think it's going to rain",
        createTime: "2020-12-05 13:53:23",
        likes: 0,
        liked: false,
        media: {
            url: "test-image.jpg",
            type: "image"
        },
        author: {
            id: 2,
            firstname: "Gordon",
            lastname: "Freeman",
            avatar: 'avatar.url'
        }
    },
    {
        id: 2,
        text: "Which weighs more, a pound of feathers or a pound of bricks?",
        createTime: "2020-12-05 13:53:23",
        likes: 1,
        liked: true,
        media: null,
        author: {
            id: 3,
            firstname: "Sarah",
            lastname: "Connor",
            avatar: 'avatar.url'
        }
    },
    {
        id: 4,
        text: null,
        createTime: "2020-12-05 13:53:23",
        likes: 3,
        liked: false,
        media: {
            url: "test-video.mp4",
            type: "video"
        },
        author: {
            id: 5,
            firstname: "Richard",
            lastname: "Stallman",
            avatar: 'avatar.url'
        }
    }
];

//Mock axios.get method that our Component calls in mounted event
jest.mock("axios", () => ({
    get: () => Promise.resolve({
        data: testData
    })
}));

describe('Posts', () => {

    const wrapper = mount(Posts, {router, store, localVue});

    it('1 == 1', function () {
        expect(true).toBe(true)
    });

    it('Should render all posts', function() {
        let posts = wrapper.findAll('.post');
        expect(posts.length).toBe(testData.length);
    })

    it('Should display creation time in correct format', function() {
        let posts = wrapper.findAll('.post');
        testData.forEach((testPost, i) => {
            let post = posts.at(i);
            let date = post.find('.post-author');

            let testDate = moment(testPost.createTime, 'YYYY-MM-DD hh:mm:ss');
            let correctDate = testDate.format('dddd, MMMM D, YYYY h:mm A')

            expect(date.exists()).toBe(true);
            expect(date.html()).toContain(correctDate);
        })
    })

    it('Should render correctly image or video if media property is present otherwise should not', function () {
        let posts = wrapper.findAll('.post');
       
        testData.forEach((testPost, i) => {
            let post = posts.at(i);
            const postImage = post.find('.post-image');
            if (!testPost.media) {
                expect(postImage.exists()).toBe(false);
            } 
            else {
                expect(postImage.exists()).toBe(true);
                expect(postImage.html()).toContain(testPost.media.url);

                if (testPost.media.type === 'image') {
                    expect(postImage.find('img').exists()).toBe(true);
                }
                else if (testPost.media.type === 'video'){
                    expect(postImage.find('video').exists()).toBe(true);
                }
            }
        })
    });

});