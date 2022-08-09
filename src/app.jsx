import { useCallback, useEffect, useState } from "react";
import {
  TopbarMenuItem,
  Sidebar,
  SidebarIsEmpty,
  useOpenSidebar,
  useCloseSidebar,
  useNotionFullPageContentBlockHtml,
} from "@nbundle/react";

function Outline({ autoToggle }) {
  // Get the table of contents block element (if any) in the user's current Notion page
  const toc = useNotionFullPageContentBlockHtml({ type: "table_of_contents" });

  // Sync inner HTML of the block element with the sidebar element
  const [html, setHtml] = useState("");
  useEffect(() => {
    if (!toc) {
      setHtml("");
      return;
    }
    const update = () => {
      setHtml(toc.innerHTML);
    };
    const mutationObserver = new MutationObserver(update);
    mutationObserver.observe(toc, {
      subtree: true, // For content
      childList: true,
      characterData: true,
      attributeFilter: ["style"], // For light/dark mode
    });
    update();
    return () => mutationObserver.disconnect();
  }, [toc, setHtml]);

  // Auto show/hide the sidebar when there is/isn't outline
  const hasHtml = !!html;
  const openSidebar = useOpenSidebar();
  const closeSidebar = useCloseSidebar();
  useEffect(() => {
    if (!autoToggle) return;
    if (hasHtml) openSidebar();
    else closeSidebar();
  }, [autoToggle, hasHtml, openSidebar, closeSidebar]);

  return (
    // Show outline in the sidebar
    <Sidebar name="Outline">
      {html ? (
        <div
          className="nbundle-m-4"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <SidebarIsEmpty message="No table of contents. To see outline, add a table of contents block to the page." />
      )}
    </Sidebar>
  );
}

export default function App() {
  // Whether or not to automatically toggle the sidebar when the outline should be shown
  const [autoToggle, setAutoToggle] = useState(
    () => localStorage.getItem("notion-outline-auto-toggle") !== "false" // Get user preference from local storage, default is true
  );

  // Save user preference to local storage
  useEffect(() => {
    if (autoToggle) localStorage.removeItem("notion-outline-auto-toggle");
    else localStorage.setItem("notion-outline-auto-toggle", "false");
  }, [autoToggle]);

  const toggleAutoToggle = useCallback(
    () => setAutoToggle((autoToggle) => !autoToggle),
    [setAutoToggle]
  );
  return (
    <>
      {/* User can turn on/off auto-toggle via the topbar menu */}
      <TopbarMenuItem
        type="toggle"
        text="Auto show/hide outline"
        checked={autoToggle}
        onClick={toggleAutoToggle}
      />
      <Outline autoToggle={autoToggle} />
    </>
  );
}
