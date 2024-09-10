export default function Home() {
    return (
      <div className="w-screen h-screen flex flex-col">
        <div className="w-full flex-grow bg-white text-center grid grid-cols-2">
          <div className="flex justify-center">
            <img src="https://media.discordapp.net/attachments/1234934743167012886/1283129543548469320/3dgifmaker09612.gif?ex=66e1df02&is=66e08d82&hm=8ac403ca2f03851a9ddbbe4222bbebc281c9e4debb351b189022c63a16db5aac&=&width=682&height=682" alt="" />
          </div>
          <div className="bg-black p-5 grid grid-rows-2">
            <div>
              <h1 className="text-white font-extrabold text-7xl">About</h1>
            </div>
            <div>
              <p>
                teste
              </p>
            </div>
          </div>
        </div>
        <div className="text-center p-2">
          <footer>
            <h1>ALL RIGHTS RESERVED TO BRAZASIDECLAN</h1>
          </footer>
        </div>
      </div>
    );
  }