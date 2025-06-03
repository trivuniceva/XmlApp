package backend.xmlapp.model;

public class CopyrightInfoDTO {
    private String workType;
    private String otherWorkType;
    private String title;
    private String altTitle;
    private String recordFormat;
    private String otherRecordFormat;
    private String sourceTitle;
    private boolean isAdaptation;
    private AuthorDTO sourceAuthorInfo;


    public String getWorkType() {
        return workType;
    }

    public void setWorkType(String workType) {
        this.workType = workType;
    }

    public String getOtherWorkType() {
        return otherWorkType;
    }

    public void setOtherWorkType(String otherWorkType) {
        this.otherWorkType = otherWorkType;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAltTitle() {
        return altTitle;
    }

    public void setAltTitle(String altTitle) {
        this.altTitle = altTitle;
    }

    public String getRecordFormat() {
        return recordFormat;
    }

    public void setRecordFormat(String recordFormat) {
        this.recordFormat = recordFormat;
    }

    public String getOtherRecordFormat() {
        return otherRecordFormat;
    }

    public void setOtherRecordFormat(String otherRecordFormat) {
        this.otherRecordFormat = otherRecordFormat;
    }

    public String getSourceTitle() {
        return sourceTitle;
    }

    public void setSourceTitle(String sourceTitle) {
        this.sourceTitle = sourceTitle;
    }

    public boolean isAdaptation() {
        return isAdaptation;
    }

    public void setAdaptation(boolean adaptation) {
        isAdaptation = adaptation;
    }

    public AuthorDTO getSourceAuthorInfo() {
        return sourceAuthorInfo;
    }

    public void setSourceAuthorInfo(AuthorDTO sourceAuthorInfo) {
        this.sourceAuthorInfo = sourceAuthorInfo;
    }
}
