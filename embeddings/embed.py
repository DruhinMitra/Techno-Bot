import os
from langchain.document_loaders import PyPDFLoader, CSVLoader, TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.embeddings import HuggingFaceEmbeddings

DATA_PATH = "D:\\TINT HACKATHON\Techno-Buddy\\backend\\data"
VECTORSTORE_PATH = "D:\\TINT HACKATHON\\Techno-Buddy\\backend\\Vector_store"

loaders = []
for file in os.listdir(DATA_PATH):
    path = os.path.join(DATA_PATH, file)
    if file.endswith(".pdf"):
        loaders.append(PyPDFLoader(path))
    elif file.endswith(".csv"):
        loaders.append(CSVLoader(path))
    elif file.endswith(".txt"):
        loaders.append(TextLoader(path,encoding="utf-8"))

docs = []
for loader in loaders:
    docs.extend(loader.load())

splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
chunks = splitter.split_documents(docs)

embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
vectorstore = FAISS.from_documents(chunks, embeddings)
vectorstore.save_local(VECTORSTORE_PATH)
print("✅ Vectorstore built and saved.")