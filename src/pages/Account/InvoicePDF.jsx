import { Text, Page, View, Document, StyleSheet } from "@react-pdf/renderer";

const InvoicePDF = ({ data, user }) => {
  //hostname for the server
  const hostname = window.location.hostname;
  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* //header with logo */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            borderBottom: "1px solid #000",
          }}
        >
          <Text>Java Sports</Text>
          <Text>{hostname}</Text>
        </View>
        {/* //invoice details */}
        <View style={styles.section}>
          <Text>
            Invoice Date: {new Date(data.createdAt).toLocaleDateString()}
          </Text>
          <Text>Order Id: {data._id}</Text>
        </View>
        {/* //customer details */}
        <View style={styles.section}>
          <Text>Customer Name: {user.full_Name}</Text>
          <Text>Customer Email: {user.email}</Text>
          <Text>Customer Address: {user.phoneNo}</Text>
        </View>
        {/* //invoice items */}
        <View style={styles.section}>
          <Text>Order Items</Text>
          <View>
            {data.orderItems.map((item, index) => (
              <View
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 10,
                  borderBottom: "1px solid #000",
                }}
              >
                <Text>{item.name}</Text>
                <Text>Quantity: {item.quantity}</Text>
                <Text>Price: ₹{item.price}</Text>
              </View>
            ))}
          </View>
        </View>
        {/* //invoice total */}
        <View style={styles.section}>
          <Text>Total: ₹{data.totalPrice}</Text>
          <Text>Payment Id: {data.razorpay_payment_id}</Text>
        </View>

        {/* //footer */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            borderTop: "1px solid #000",
          }}
        >
          <Text>Thank you for your business</Text>
          <Text>Java Sports</Text>
        </View>
      </Page>
    </Document>
  );
};
export default InvoicePDF;
