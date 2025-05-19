import {UserInfo} from './UserInfo';
import {AuthorInfo} from './AuthorInfo';

export interface FizickoPodnosilac {
  userInfo: UserInfo;
  isAuthorSubmitting: boolean;
  authors: AuthorInfo[];

}
