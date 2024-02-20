import { Text, Page, View, Document, StyleSheet } from "@react-pdf/renderer";

const InvoicePDF = ({ data }) => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text
            style={{
              fontSize: 24,
              textAlign: "center",
              marginBottom: 20,
            }}
          >
            {`Invoice - ${JSON.parse(data).product}`}
          </Text>
          <Text>{data}</Text>
        </View>
      </Page>
    </Document>
  );
};
export default InvoicePDF;
