function fetchbookmarks() {
 chrome.bookmarks.getTree(
  idOrIdList: string | [string, ...string[]],
): Promise<BookmarkTreeNode[]>
}

