package jobb_logg.backend.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import java.sql.*;
import java.util.Properties;

public class DataAccess {

    String dbUrl = "jdbc:postgresql://localhost:5432/";
    Properties props;
    Connection conn;

    public DataAccess() {
        props = new Properties();
        props.setProperty("user", "postgres");
        props.setProperty("password", "password");
        props.setProperty("useSSL", "true");
        props.setProperty("verifyServerCertificate", "false");

        try {
            conn = DriverManager.getConnection(dbUrl, props);
            PreparedStatement ps = conn.prepareStatement(
                    "CREATE TABLE IF NOT EXISTS job_adverts (advert_id SERIAL PRIMARY KEY, companyName varchar(225), positionName varchar(225), deadline varchar(225), priority varchar(225), hyperlink varchar(225), advertisementSite varchar(225) , city varchar(225) , appliedFor varchar(225));");
            ps.executeUpdate();
            ps.close();
        } catch (SQLException e) {
            System.out.println("Aiaiai, noe gikk galt under konstruksjon av denne klassen");
            System.out.println("FEILMELDING");
            System.out.println(e.getMessage());
            System.out.println("SQL GREIER");
            System.out.println(e.getSQLState());

        }

    }

    public void createRow(JobAdvertistement jobAdvert) {
        try {
            Statement st = conn.createStatement();
            st.execute(
                    "INSERT INTO job_adverts (companyName, positionName, deadline, priority, hyperlink, advertisementSite, city, appliedFor) VALUES"
                            + jobAdvert.getSqlValues() + ";");
            st.close();
        } catch (SQLException e) {
            System.out.println("Something went wrong while writing to DB");
            System.out.println("FEILMELDING");
            System.out.println(e.getMessage());
        }
    }

    public void readDB() {
        try {
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery("SELECT * FROM job_adverts");
            while (rs.next()) {
                System.out.println(rs.getString("companyName"));
            }
            rs.close();
            st.close();
        } catch (SQLException e) {
            System.out.println("Something went wrong while reading from DB");
            System.out.println("FEILMELDING");
            System.out.println(e.getMessage());
        }
    }

    public void deleteTable() {
        try {
            Statement st = conn.createStatement();
            st.execute("DROP TABLE IF EXISTS job_adverts");
            st.close();
        } catch (Exception e) {
            System.out.println("Something went wrong while deleting table");
            System.out.println("FEILMELDING");
            System.out.println(e.getMessage());
        }
    }

    @Autowired
    JdbcTemplate jdbcTemplate;

    public static void main(String[] args) {
        System.out.println("Hellp world");
        JobAdvertistement j = new JobAdvertistement(0, "Evil Inc.", "Developer", "May", "HIGH",
                "https://finn.no", "finn", "Trondheim", false);
        DataAccess da = new DataAccess();
        da.createRow(j);
        da.readDB();
        // da.deleteTable();
    }
}
