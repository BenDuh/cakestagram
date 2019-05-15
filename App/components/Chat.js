import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { getMessagesRequest } from '../redux/reducers/chatReducer'
import { connect } from 'react-redux'

class Chat extends Component {
  state = {
    conversation: {
      "id": 1,
      "created_at": "2019-05-13T09:30:47Z",
      "updated_at": "2019-05-13T09:30:47Z",
      "user": {
        "id": 1,
        "last_name": "DIDIERJEAN",
        "first_name": "Fabrice",
        "avatar": "https://formation-api.k8s.svc.idee.cloud/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b87fa9ed4dea347e44b6b5ac98f18b24dc07f95c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lNTXpBd2VETXdNQVk2QmtWVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--ef0207faae2f0c3606d074b7ee08cd7422627751/avatar",
        "avatar_thumb": "https://formation-api.k8s.svc.idee.cloud/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b87fa9ed4dea347e44b6b5ac98f18b24dc07f95c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lNTVRBd2VERXdNQVk2QmtWVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a1a58f15b168077ff2a9f9572f32d5553d7f35e0/avatar"
      },
      "last_message": {
        "id": 35,
        "created_at": "2019-05-15T10:12:56Z",
        "updated_at": "2019-05-15T10:12:56Z",
        "text": "Test",
        "user": {
          "id": 2,
          "last_name": "Test",
          "first_name": "Test",
          "avatar": "https://formation-api.k8s.svc.idee.cloud/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5c94efd0fe7399aae0c5b54483abe4ba661ca323/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lNTXpBd2VETXdNQVk2QmtWVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--ef0207faae2f0c3606d074b7ee08cd7422627751/avatar",
          "avatar_thumb": "https://formation-api.k8s.svc.idee.cloud/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5c94efd0fe7399aae0c5b54483abe4ba661ca323/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lNTVRBd2VERXdNQVk2QmtWVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a1a58f15b168077ff2a9f9572f32d5553d7f35e0/avatar"
        }
      }
    }
  }

  componentDidMount() {
    this.props.getMessagesRequest()
  }

  render() {
    console.log(this.props)

    return (
      <View>
        <Text>{JSON.stringify(this.props.messages)}</Text>
      </View>
    )
  }
}

mapStateToProps = (state) => {
  return {
    messages: state.chat.messages
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    getMessagesRequest: () => dispatch(getMessagesRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)