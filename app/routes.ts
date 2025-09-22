import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("common/pages/home-page.tsx"),
  ...prefix("products", [
    index("features/products/pages/products-page.tsx"),
    layout("features/products/layouts/leaderboard-layout.tsx", [
      ...prefix("leaderboards", [
        index("features/products/pages/leaderboards-page.tsx"),
        route(
          "/yearly/:year",
          "features/products/pages/yearly-leaderboard-page.tsx"
        ),
        route(
          "/monthly/:year/:month",
          "features/products/pages/monthly-leaderboard-page.tsx"
        ),
        route(
          "/daily/:year/:month/:day",
          "features/products/pages/daily-leaderboard-page.tsx"
        ),
        route(
          "/weekly/:year/:week",
          "features/products/pages/weekly-leaderboard-page.tsx"
        ),
        route(
          "/:period",
          "features/products/pages/leaderboards-redirection-page.tsx"
        ),
      ]),
    ]),
    ...prefix("categories", [
      index("features/products/pages/categories-page.tsx"),
      route("/:categoryId", "features/products/pages/category-page.tsx"),
    ]),
    route("/search", "features/products/pages/search-page.tsx"),
    route("/submit", "features/products/pages/submit-product-page.tsx"),
    route("/promote", "features/products/pages/promote-page.tsx"),
    ...prefix("/:productId", [
      index("features/products/pages/product-redirect-page.tsx"),
      layout("features/products/layouts/product-overview-layout.tsx", [
        route("/overview", "features/products/pages/product-overview-page.tsx"),
        ...prefix("/reviews", [
          index("features/products/pages/product-reviews-page.tsx"),
        ]),
      ]),
    ]),
  ]),
  ...prefix("ideas", [
    index("features/ideas/pages/ideas-page.tsx"),
    route("/:ideaId", "features/ideas/pages/idea-page.tsx"),
  ]),
  ...prefix("jobs", [
    index("features/jobs/pages/jobs-page.tsx"),
    route("/:jobId", "features/jobs/pages/job-page.tsx"),
    route("/submit", "features/jobs/pages/submit-job-page.tsx"),
  ]),
  ...prefix("auth", [
    layout("features/auth/layouts/auth-layout.tsx", [
      route("/login", "features/auth/pages/login-page.tsx"),
      route("/join", "features/auth/pages/join-page.tsx"),
      ...prefix("/otp", [
        route("/start", "features/auth/pages/otp-start-page.tsx"),
        route("/complete", "features/auth/pages/otp-complete-page.tsx"),
      ]),
      ...prefix("/social/:provider", [
        route("/start", "features/auth/pages/social-start-page.tsx"),
        route("/complete", "features/auth/pages/social-complete-page.tsx"),
      ]),
    ]),
  ]),
  ...prefix("community", [
    index("features/community/pages/community-page.tsx"),
    route("/:postId", "features/community/pages/post-page.tsx"),
    route("/submit", "features/community/pages/submit-post-page.tsx"),
  ]),
  ...prefix("teams", [
    index("features/teams/pages/teams-page.tsx"),
    route("/:teamId", "features/teams/pages/team-page.tsx"),
    route("/create", "features/teams/pages/submit-team-page.tsx"),
  ]),
  ...prefix("my", [
    layout("features/users/layouts/dashboard-layout.tsx", [
      ...prefix("/dashboard", [
        index("features/users/pages/dashboard-page.tsx"),
        route("/ideas", "features/users/pages/dashboard-ideas-page.tsx"),
        route(
          "/products/:productId",
          "features/users/pages/dashboard-product-page.tsx"
        ),
      ]),
    ]),
    layout("features/users/layouts/messages-layout.tsx", [
      ...prefix("/messages", [
        index("features/users/pages/messages-page.tsx"),
        route("/:messageId", "features/users/pages/message-page.tsx"),
      ]),
    ]),
  ]),
  layout("features/users/layouts/profile-layout.tsx", [
    ...prefix("/users/:username", [
      index("features/users/pages/profile-page.tsx"),
      route("/products", "features/users/pages/profile-products-page.tsx"),
      route("/posts", "features/users/pages/profile-posts-page.tsx"),
    ]),
  ]),
] satisfies RouteConfig;

// product-redirect-page.tsx는 선택 사항이며, 팀이 라우팅 구조를 더 유연하고 확장 가능하게 만들기 위한 의도적인 구성이에요.
// 당장은 단순 redirect일 뿐이지만, 앞으로 조건 분기나 UX 개선의 여지를 남겨두는 설계라고 보면 됩니다.
// 2. 하위 탭 구조를 명확히 하고 싶은 경우 /products/:productId가 탭 기반 UI 구조일 경우, overview, reviews 등은 하위 탭
// 루트 경로 (:productId)에서 어떤 탭으로 이동할지 중앙 컨트롤이 필요
