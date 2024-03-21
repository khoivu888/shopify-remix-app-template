import {
  Card,
  Layout,
  Page,
  Grid,
  LegacyCard,
  VideoThumbnail,
} from "@shopify/polaris";

export default function InstallationPage() {
  return (
    <Page>
      <ui-title-bar title="Installation app embeds" />
      <Layout>
        <Layout.Section>
          <Card>
            <Grid>
              <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 5}}>
                <div>
                  <VideoThumbnail
                      videoLength={80}
                      thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                      onClick={() => console.log('clicked')}
                    />
                </div>
              </Grid.Cell>
              <Grid.Cell columnSpan={{xs: 6, sm: 3, md: 3, lg: 6, xl: 7}}>
                <LegacyCard title="Orders" sectioned>
                  <p>View a summary of your online store’s orders.</p>
                </LegacyCard>
              </Grid.Cell>
            </Grid>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

// function Code({ children }: { children: React.ReactNode }) {
//   return (
//     <Box
//       as="span"
//       padding="025"
//       paddingInlineStart="100"
//       paddingInlineEnd="100"
//       background="bg-surface-active"
//       borderWidth="025"
//       borderColor="border"
//       borderRadius="100"
//     >
//       <code>{children}</code>
//     </Box>
//   );
// }
