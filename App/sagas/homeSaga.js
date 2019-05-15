import { put, call } from 'redux-saga/effects'
import { getPosts } from '../redux/reducers/homeReducer'
import api from '../config/api';

export function* getPostSaga() {
    const rsp = yield call([api, 'get'], "/posts")
    yield put(getPosts(rsp.data))
}

const test = {
    "id": 3,
    "created_at": "2019-05-14T08:29:03Z",
    "updated_at": "2019-05-14T08:29:03Z",
    "text": "Blah",
    "attachment": "https://formation-api.k8s.svc.idee.cloud/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c54649bc92380471afe3abbbee0c0aea8f21a118/attachment",
    "type_post": "image",
    "thumb": "https://formation-api.k8s.svc.idee.cloud/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c54649bc92380471afe3abbbee0c0aea8f21a118/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lNTlRBd2VEVXdNQVk2QmtWVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--c3a8fcebe4c12a0a67e4845ed0a43e743ff8d391/attachment",
    "likes_count": 0,
    "comments_count": 0,
    "owner": {
        "id": 2,
        "last_name": "Test",
        "first_name": "Test",
        "avatar": "https://formation-api.k8s.svc.idee.cloud/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5c94efd0fe7399aae0c5b54483abe4ba661ca323/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lNTXpBd2VETXdNQVk2QmtWVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--ef0207faae2f0c3606d074b7ee08cd7422627751/avatar",
        "avatar_thumb": "https://formation-api.k8s.svc.idee.cloud/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5c94efd0fe7399aae0c5b54483abe4ba661ca323/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lNTVRBd2VERXdNQVk2QmtWVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a1a58f15b168077ff2a9f9572f32d5553d7f35e0/avatar"
    }
}