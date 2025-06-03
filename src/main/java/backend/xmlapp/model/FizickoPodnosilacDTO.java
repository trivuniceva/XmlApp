package backend.xmlapp.model;

import java.util.List;

public class FizickoPodnosilacDTO {

    private UserInfoDTO userInfo;
    private boolean isAuthorSubmitting;
    private List<AuthorDTO> authors;
    private CopyrightInfoDTO copyrightInfo;

    public UserInfoDTO getUserInfo() {
        return userInfo;
    }

    public void setUserInfo(UserInfoDTO userInfo) {
        this.userInfo = userInfo;
    }

    public boolean isAuthorSubmitting() {
        return isAuthorSubmitting;
    }

    public void setAuthorSubmitting(boolean authorSubmitting) {
        isAuthorSubmitting = authorSubmitting;
    }

    public List<AuthorDTO> getAuthors() {
        return authors;
    }

    public void setAuthors(List<AuthorDTO> authors) {
        this.authors = authors;
    }

    public CopyrightInfoDTO getCopyrightInfo() {
        return copyrightInfo;
    }

    public void setCopyrightInfo(CopyrightInfoDTO copyrightInfo) {
        this.copyrightInfo = copyrightInfo;
    }

}