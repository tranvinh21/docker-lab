import { Application, Router} from 'https://deno.land/x/oak/mod.ts'

const books = new Map<string, any>();
books.set("1", {
  id: '1',
  title: "The ound of the Baskervilles",
  author: "Vin Tran"
})

const router = new Router();
router.get('/', (ctx)=> {
  ctx.response.body = " Hello world!";
})
.get('/book', (ctx)=> {
  ctx.response.body = Array.from(books.values())
})
.get('/book/:id', (ctx)=> {
  if(books.has(ctx?.params?.id)) {
    ctx.response.body = books.get(ctx.params.id)
  }
})

const app = new Application();
app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({port:8080})

