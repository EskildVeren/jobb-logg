package jobb_logg.backend.server;

import java.io.Serializable;

public class JobAdvertistement implements Serializable {
    private final int advertId;
    private String companyName, positionName, deadline, priority, hyperlink, advertisementSite, city;
    private boolean appliedFor;

    public JobAdvertistement(int advertId, String companyName, String positionName, String deadline, String priority,
            String hyperlink, String advertisementSite, String city, boolean appliedFor) {
        this.advertId = advertId;
        this.companyName = companyName;
        this.positionName = positionName;
        this.deadline = deadline;
        this.priority = priority;
        this.hyperlink = hyperlink;
        this.advertisementSite = advertisementSite;
        this.city = city;
        this.appliedFor = appliedFor;
    }

    @Override
    public String toString() {
        return String.format(
                "JobAdvertistement[advertId='%d', companyName='%s', positionName='%s', deadline='%s', priority='%s', hyperlink='%s', advertisementSite='%s', city='%s', appliedFor='%s']",
                advertId, companyName, positionName, deadline, priority, hyperlink, advertisementSite, city,
                appliedFor);
    }

    public String getSqlValues() {
        String subStatement = "(";
        subStatement = subStatement.concat("'" + companyName + "', ");
        subStatement = subStatement.concat("'" + positionName + "', ");
        subStatement = subStatement.concat("'" + deadline + "', ");
        subStatement = subStatement.concat("'" + priority + "', ");
        subStatement = subStatement.concat("'" + hyperlink + "', ");
        subStatement = subStatement.concat("'" + advertisementSite + "', ");
        subStatement = subStatement.concat("'" + city + "', ");
        subStatement = subStatement.concat("'" + appliedFor + "'");
        subStatement = subStatement.concat(")");

        return subStatement;
    }

    public int getAdvertId() {
        return advertId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getPositionName() {
        return positionName;
    }

    public void setPositionName(String positionName) {
        this.positionName = positionName;
    }

    public String getDeadline() {
        return deadline;
    }

    public void setDeadline(String deadline) {
        this.deadline = deadline;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getHyperlink() {
        return hyperlink;
    }

    public void setHyperlink(String hyperlink) {
        this.hyperlink = hyperlink;
    }

    public String getAdvertisementSite() {
        return advertisementSite;
    }

    public void setAdvertisementSite(String advertisementSite) {
        this.advertisementSite = advertisementSite;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public boolean isAppliedFor() {
        return appliedFor;
    }

    public void setAppliedFor(boolean appliedFor) {
        this.appliedFor = appliedFor;
    }
}
