import {UserInfo} from './UserInfo';

export interface AuthorInfo {
  userInfo: UserInfo;
  pseudonyms?: string[];
  authorAnonymous?: boolean;

}
