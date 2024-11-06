
// 建立新的元件
function MyComponent() {
  return (
    // 空標籤：Fragment
    <>
      <h1>React</h1>
      <p>hellohellohellohellohellohellohello</p>
    </>
  )
}

// 元件裡面盡量不要再建立元件，會影響react效能
// 只要使用元件就好
function App() {

  return (
    <div>
      <MyComponent />
    </div>
  )
}

// 元件要被其他檔案使用的話記得export default
// 檔名命名要與元件一樣
export default App
