import React from "react";
import "./App.css";
import ThemeProvider from "./ch2/ThemeProvider";
import MyShop from "./ch4/MyShop";
import { TermsAndConditions } from "./ch5/TermsAndConditions";
import { SearchableList } from "./ch8/SearchableList/SearchableList";
import { NotificationApp } from "./ch8/Notification/NotificationApp";
import LoadingButton from "./ch9/LoadingButton";
import AnalyticsButton from "./ch9/AnalyticsButton";
import LoadingAnalyticsButton from "./ch9/LoadingAnalyticsButton";
import AnalyticsPanel from "./ch9/AnalyticsPanel";
import withAnalyticsX from "./ch9/withAnalyticsX";
import { ExpandablePanel } from "./ch9/ExpandablePanel";
import { ButtonProps, PanelProps } from "./ch9/types";
import Button from "./ch9/Button";
import UserList from "./ch9/UserList";
import withAutoClose from "./ch9/withAutoClose";
import ShoppingApplication from "./ch9/CQRS/ShoppingApplication";
import ShoppingApplicationNew from "./ch9/CQRS/ShoppingApplicationNew";
import { ShoppingCartProvider } from "./ch9/CQRS/ShoppingCartContext";

const items = [
  {
    id: "1",
    name: "Clean Code",
    description:
      "A book by Robert C. Martin that focuses on best practices for writing clean, maintainable code.",
  },
  {
    id: "2",
    name: "Design Patterns",
    description:
      "Written by the Gang of Four, this book explores various design patterns for object-oriented software engineering.",
  },
  {
    id: "3",
    name: "You Don't Know JS",
    description:
      "A series of books by Kyle Simpson that delves deep into the core mechanisms of JavaScript.",
  },
  {
    id: "4",
    name: "The Pragmatic Programmer",
    description:
      "Andrew Hunt and David Thomas provide tips and techniques to become a more effective, efficient, and adaptable developer.",
  },
  {
    id: "5",
    name: "Refactoring",
    description:
      "By Martin Fowler, this book discusses how to improve the design of existing code.",
  },
  {
    id: "6",
    name: "Introduction to Algorithms",
    description:
      "A textbook by Cormen, Leiserson, Rivest, and Stein that provides a comprehensive introduction to modern algorithm design and analysis.",
  },
  {
    id: "7",
    name: "Structure and Interpretation of Computer Programs",
    description:
      "A foundational text in computer science, focusing on the importance of programming design.",
  },
  {
    id: "8",
    name: "Cracking the Coding Interview",
    description:
      "By Gayle Laakmann McDowell, this book is aimed at preparing software engineers for interviews.",
  },
  {
    id: "9",
    name: "Continuous Delivery",
    description:
      "Jez Humble and David Farley discuss the software engineering approaches that allow rapid, reliable delivery.",
  },
  {
    id: "10",
    name: "JavaScript: The Good Parts",
    description:
      "Douglas Crockford distills the best parts of JavaScript, shedding light on its most useful features.",
  },
];

const AnalyticsPanelX = withAnalyticsX<PanelProps>(ExpandablePanel);
const AnalyticsButtonX = withAnalyticsX<ButtonProps>(Button);

const AnalyticsExpandablePanel = withAutoClose(ExpandablePanel);

function App() {
  const onItemClicked = (id: string) => console.log(id);

  return (
    <div className="app">
      {/*<ThemeProvider>*/}
      {/*  <MyShop />*/}
      {/*  <TermsAndConditions />*/}
      {/*</ThemeProvider>*/}
      {/*<SearchableList items={items} onItemClicked={onItemClicked} />*/}
      <NotificationApp />
      <LoadingButton>Click me please</LoadingButton>
      {/*<AnalyticsButton onClick={() => console.log(Math.PI * 100)}>*/}
      {/*  I'll recording the timing when you clicked*/}
      {/*</AnalyticsButton>*/}

      <LoadingAnalyticsButton onClick={() => console.log(Math.PI * 100)}>
        I'm logging and loading
      </LoadingAnalyticsButton>

      <AnalyticsButtonX>Click me if you like.</AnalyticsButtonX>

      {/*<AnalyticsPanelX*/}
      {/*  heading={<h3>Show more details</h3>}*/}
      {/*  content={<p>There are some more details should be displayed here.</p>}*/}
      {/*/>*/}

      <AnalyticsExpandablePanel
        heading={<h3>Show more details</h3>}
        content={<p>There are some more details should be displayed here.</p>}
      />

      <UserList />

      <ShoppingApplication />

      <ShoppingCartProvider>
        <ShoppingApplicationNew />
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
