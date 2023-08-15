import React, { useState, ChangeEvent } from 'react';
import InputTitle from "@/components/write/InputTitle";
import InputContent from "@/components/write/InputContent";
import InputImage from "@/components/write/InputImage";
import { ScrollContent } from "@/components/common/post/PostDetail";

export default function Home() {
    const [selectedImages, setSelectedImages] = useState<FileList | null>(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [previewImageCount, setPreviewImageCount] = useState(0);

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };
    const handleImageChange = (files: FileList | null) => {
        setSelectedImages(files);
        setPreviewImageCount(files?.length || 0);
    };
    return (
        <ScrollContent>
            <div
                style={{
                    width: "100%",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "15px",
                    flex: "1",
                    overflow: "auto",
                    scrollBehavior: "smooth",
                    display: "flex",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flex: "1",
                        marginBottom: "110px",
                    }}>
                    <div>
                        <InputTitle title={title} onTitleChange={handleTitleChange} />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <InputContent content={content} onContentChange={handleContentChange} />
                    </div>
                    <InputImage onChange={handleImageChange} previewCount={previewImageCount} />
                </div>
            </div>
        </ScrollContent>
    );
};