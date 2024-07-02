import { Collapsible } from "./ui/collapsible"

export const Extension = () => {
  return (
    <main className="antialised w-full mb-3 z-10">
      <div className="w-full">
        <Collapsible className="space-y-3">
          <h1>Extension Actions</h1>
          <div className="flex flex-col space-y-3">
            <button className="btn">Action 1</button>
            <button className="btn">Action 2</button>
            <button className="btn">Action 3</button>
          </div>
        </Collapsible>
      </div>
    </main>
  )
}
