import type {Route} from "./+types/home";
import Navbar from "../../components/Navbar";
import {ArrowRight, ArrowUpRight, Clock, Layers} from "lucide-react";
import Button from "../../components/ui/Button";
import Upload from "../../components/Upload";
import {useNavigate} from "react-router";

/**
 * Supplies metadata for the route: sets the document title and description meta tag.
 *
 * @returns An array of route metadata objects: one with `title` set to "New React Router App" and one meta entry with `name` "description" and `content` "Welcome to React Router!".
 */
export function meta({}: Route.MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

/**
 * Renders the Home page UI with hero, upload, and projects sections; when an upload completes it generates a timestamp ID and navigates to `/visualizer/{id}`.
 *
 * @returns The React element for the Home route.
 */
export default function Home() {
    const navigate = useNavigate();

    const handleUploadComplete = async (base64Image: string) => {
        const newId = Date.now().toString();

        navigate(`/visualizer/${newId}`);

        return true;
    }

    return (
        <div className="home">
            <Navbar/>
            <section className="hero">
                <div className="announce">
                    <div className="dot">
                        <div className="pulse">

                        </div>
                    </div>

                    <p>Introducing Roomify 2.0</p>
                </div>

                <h1>Build beautiful spaces at the speed of thought with roomify</h1>

                <p className="subtitle">
                    Roomify is an AI-First design environment that helps you visualize,
                    render and ship architectural projects faster than ever.
                </p>

                <div className="actions">
                    <a href="#upload" className="cta">
                        Start Building <ArrowRight className="icon"/>
                    </a>

                    <Button variant="outline" size="lg" className="demo">
                        Watch Demo
                    </Button>
                </div>

                <div id="upload" className="upload-shell">
                    <div className="grid-overlay"/>

                    <div className="upload-card">
                        <div className="upload-head">
                            <div className="upload-icon">
                                <Layers className="icon"/>
                            </div>

                            <h3>Upload your floor plan</h3>
                            <p>Supports JPG, PNG formats, up to 10MB</p>
                        </div>

                        <Upload onComplete={handleUploadComplete}/>

                    </div>
                </div>
            </section>

            <section className="projects">
                <div className="section-inner">
                    <div className="section-head">
                        <div className="copy">
                            <h2>Projects</h2>
                            <p>
                                Your latest work and shared community projects, all
                                in one place.
                            </p>
                        </div>
                    </div>
                    <div className="projects-grid">
                        <div className="project-card group">
                            <div className="preview">
                                <img
                                    src="https://roomify-mlhuk267-dfwu1i.puter.site/projects/1770803585402/rendered.png"
                                    alt="Project"
                                />

                                <div className="badge">
                                    <span>Community</span>
                                </div>
                            </div>

                            <div className="card-body">
                                <div>
                                    <h3>Project Manhattan</h3>

                                    <div className="meta">
                                        <Clock size={12}/>
                                        <span>{new Date('2026-01-01').toLocaleDateString()}</span>
                                        <span>By David Alonso</span>
                                    </div>
                                </div>
                                <div className="arrow">
                                    <ArrowUpRight size={18}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
