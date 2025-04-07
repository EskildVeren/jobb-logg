package jobb_logg.backend.server;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

public class DataAccess {

    private static Connection getConnection() throws SQLException {
        String url = "jdbc:postgresql://localhost:5432/";
        Properties props = new Properties();
        props.setProperty("user", "postgres");
        props.setProperty("password", "password");
        props.setProperty("useSSL", "true");
        props.setProperty("verifyServerCertificate", "false");
        Connection conn = DriverManager.getConnection(url, props);

        return conn;
    }

    public static void createTable() throws SQLException {
        Connection conn = getConnection();
        PreparedStatement ps = conn.prepareStatement(
                "CREATE TABLE IF NOT EXISTS job_adverts (advert_id SERIAL PRIMARY KEY, companyName varchar(225), positionName varchar(225), deadline varchar(225), priority varchar(225), hyperlink varchar(225), advertisementSite varchar(225) , city varchar(225) , appliedFor varchar(225));");
    }

    public static void createRow(JobAdvertistement jobAdvert) throws SQLException {
        Connection conn = getConnection();
        Statement st = conn.createStatement();
        st.execute(
                "INSERT INTO job_adverts (companyName, positionName, deadline, priority, hyperlink, advertisementSite, city, appliedFor) VALUES"
                        + jobAdvert.getSqlValues() + ";");
        st.close();
    }

    public static List<JobAdvertistement> getAllJobAdvertisements() throws SQLException {

        // Establishing database connection, and running query to get all job adverts
        Connection conn = getConnection();
        Statement st = conn.createStatement();
        ResultSet rs = st.executeQuery("SELECT * FROM job_adverts");

        // Mapping the resultset to a list of jobAdverts
        List<JobAdvertistement> jobAdverts = new ArrayList<>();
        while (rs.next()) {
            String companyName = rs.getString("companyName");
            String positionName = rs.getString("positionName");
            String deadline = rs.getString("deadline");
            String priority = rs.getString("priority");
            String hyperlink = rs.getString("hyperlink");
            String advertisementSite = rs.getString("advertisementSite");
            String city = rs.getString("city");
            boolean appliedFor = rs.getBoolean("appliedFor");

            JobAdvertistement ja = new JobAdvertistement(companyName, positionName, deadline, priority, hyperlink,
                    advertisementSite, city, appliedFor);

            jobAdverts.add(ja);
        }

        rs.close();
        st.close();

        return jobAdverts;
    }

    public static void deleteTable() {
        try {
            Connection conn = getConnection();
            Statement st = conn.createStatement();
            st.execute("DROP TABLE IF EXISTS job_adverts");
            st.close();
        } catch (Exception e) {
            System.out.println("Something went wrong while deleting table");
            System.out.println("FEILMELDING");
            System.out.println(e.getMessage());
        }
    }

    public static void main(String[] args) {
        System.out.println("Starting program...");
        JobAdvertistement j = new JobAdvertistement("Evil Inc.", "Developer", "May", "HIGH",
                "https://finn.no", "finn", "Trondheim", false);
        // da.createRow(j);
        // getAllJobAdvertisements();
        // da.deleteTable();
    }
}
