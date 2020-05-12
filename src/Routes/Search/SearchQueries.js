import { gql } from "apollo-boost";

export const SEARCH = gql`
    search($term:String!) {
        searchPost(term:$term) {
            files {
                url
            }
            likeCount
        }
        searchUser(term:$term) {
            avatar
            userName
            isFollowing
            isSelf
        }
    }
`;
