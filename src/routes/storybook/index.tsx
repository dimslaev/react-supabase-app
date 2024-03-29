import { Outlet } from "react-router-dom";
import { useLocation } from "react-router";
import { Grid, Box, Flex, Heading } from "@radix-ui/themes";
import { Link } from "@/components/Link/Link";
import { ThemeProvider } from "@/providers/ThemeProvider";
import stories from "@/routes/storybook/stories.json";
export { storyRoutes } from "@/routes/storybook/storyRoutes";

// This is a custom Storybook component that displays all the stories in the app.

export function Storybook() {
  const { pathname } = useLocation();
  return (
    <ThemeProvider>
      <Grid columns="minmax(320px, 25%) 1fr" width="100%">
        <Flex
          direction="column"
          height="100vh"
          style={{
            borderRight: "1px solid var(--gray-a6)",
          }}
        >
          <Box
            px="6"
            py="4"
            style={{
              borderBottom: "1px solid var(--gray-a6)",
            }}
          >
            <Heading as="h2">Storybook</Heading>
          </Box>
          <Box overflowY="auto" flexGrow="1">
            {Object.entries(stories).map(([componentName, { stories }]) => (
              <Box
                key={componentName}
                px="6"
                py="4"
                style={{
                  background: pathname.includes(
                    `/storybook/${componentName.toLocaleLowerCase()}/`
                  )
                    ? "var(--gray-a3)"
                    : "",
                }}
              >
                <Heading as="h4" size="2" weight="bold" mb="1">
                  {componentName}
                </Heading>
                <Flex direction="column" gap="1">
                  {stories.map((storyName) => {
                    const href = `${componentName.toLocaleLowerCase()}/${storyName.toLocaleLowerCase()}`;
                    const isActive = `/storybook/${href}` === pathname;
                    return (
                      <Link
                        key={storyName}
                        href={href}
                        size="2"
                        underline="none"
                        color={isActive ? "blue" : "gray"}
                      >
                        <Flex align="center" gap="1">
                          {storyName}
                        </Flex>
                      </Link>
                    );
                  })}
                </Flex>
              </Box>
            ))}
          </Box>
        </Flex>
        <Box
          px="8"
          py="6"
          style={{
            marginTop: "62px",
            borderTop: "1px solid var(--gray-a6)",
            backgroundColor: "var(--color-surface)",
          }}
        >
          <Outlet />
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
