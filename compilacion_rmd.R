#' 
#' COMPILACIÓN DE LOS .RMD DE DOC_RMD A DOC
#' 

library(rmarkdown)

for (i in list.files("doc_rmd", full.names = TRUE)){
  render(i, 
         output_format = c("html_document", "pdf_document"),
         output_dir = "doc/"
         )
}



